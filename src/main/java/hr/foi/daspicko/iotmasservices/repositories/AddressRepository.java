package hr.foi.daspicko.iotmasservices.repositories;

import hr.foi.daspicko.iotmasservices.models.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Long> {
}
