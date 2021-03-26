package hr.foi.daspicko.iotmasservices.controllers.rest;

import hr.foi.daspicko.iotmasservices.exceptions.ResourceNotFoundException;
import hr.foi.daspicko.iotmasservices.models.Address;
import hr.foi.daspicko.iotmasservices.models.Contact;
import hr.foi.daspicko.iotmasservices.models.Service;
import hr.foi.daspicko.iotmasservices.models.ServiceCentre;
import hr.foi.daspicko.iotmasservices.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/service-centres")
public class ServiceCentreController {

    @Autowired
    private ServiceCentreRepository serviceCentreRepository;

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private DeviceRepository deviceRepository;

    @GetMapping
    @ResponseStatus(value = HttpStatus.OK)
    public List<ServiceCentre> getAllServiceCentres() {
        final List<ServiceCentre> serviceCentres = new ArrayList<>();
        serviceCentreRepository.findAll().forEach(serviceCentres::add);
        return serviceCentres;
    }

    @PostMapping
    @ResponseStatus(value = HttpStatus.OK)
    public ServiceCentre addServiceCentre(@Valid @ModelAttribute ServiceCentre serviceCentre) {
        Address address = addressRepository.save(serviceCentre.getAddress());
        Contact contact = contactRepository.save(serviceCentre.getContact());

        serviceCentre.setAddress(address);
        serviceCentre.setContact(contact);

        serviceCentreRepository.save(serviceCentre);
        return serviceCentre;
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public ServiceCentre removeServiceCentre(@PathVariable Long id) {
        final Optional<ServiceCentre> serviceCentreOptional = serviceCentreRepository.findById(id);

        if (serviceCentreOptional.isPresent()) {
            serviceCentreRepository.delete(serviceCentreOptional.get());
            return serviceCentreOptional.get();
        }
        else {
            throw new ResourceNotFoundException("Service koji želite obrisati ne postoji!");
        }
    }

    @PostMapping(value = "/{serviceCentreId}/services")
    @ResponseStatus(value = HttpStatus.OK)
    public Service addService(@Valid @ModelAttribute Service service, @PathVariable Long serviceCentreId) {
        Optional<ServiceCentre> serviceCentreOptional = serviceCentreRepository.findById(serviceCentreId);

        if (serviceCentreOptional.isPresent()) {
            deviceRepository.save(service.getDevice());
            service.setServiceCentre(serviceCentreOptional.get());
            serviceRepository.save(service);

            return service;
        }
        else {
            throw new ResourceNotFoundException("Servisni centar ne postoji!");
        }
    }

    @DeleteMapping(value = "/{serviceCentreId}/services/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public Service removeService(@PathVariable Long serviceCentreId, @PathVariable Long id) {
        final Optional<Service> serviceOptional = serviceRepository.findById(id);

        if (serviceOptional.isPresent()) {
            serviceRepository.delete(serviceOptional.get());
            return serviceOptional.get();
        }
        else {
            throw new ResourceNotFoundException("Usluga koju želite obrisati ne postoji!");
        }
    }

    @GetMapping(value = "/service")
    @ResponseStatus(value = HttpStatus.OK)
    public List<ServiceCentre> getAllCentresThatServiceSpecificDevice (@RequestParam String device) {
        List<ServiceCentre> serviceCentres = new ArrayList<>();

        List<Service> allServicesForDevice = serviceRepository.findAllByDeviceName(device);
        allServicesForDevice.forEach(service -> serviceCentres.add(service.getServiceCentre()));

        return serviceCentres;
    }
}
