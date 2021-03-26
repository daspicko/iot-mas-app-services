package hr.foi.daspicko.iotmasservices.repositories;

import hr.foi.daspicko.iotmasservices.models.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Long> {
}
