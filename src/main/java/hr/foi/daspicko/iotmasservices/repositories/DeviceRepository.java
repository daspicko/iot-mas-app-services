package hr.foi.daspicko.iotmasservices.repositories;

import hr.foi.daspicko.iotmasservices.models.Device;
import org.springframework.data.repository.CrudRepository;

public interface DeviceRepository extends CrudRepository<Device, Long> {
}
