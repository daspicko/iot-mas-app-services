package hr.foi.daspicko.iotmasservices.repositories;

import hr.foi.daspicko.iotmasservices.models.Service;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ServiceRepository extends CrudRepository<Service, Long> {
    List<Service> findAllByDeviceName(String deviceName);
}
