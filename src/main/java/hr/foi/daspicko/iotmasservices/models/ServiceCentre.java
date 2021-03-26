package hr.foi.daspicko.iotmasservices.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "service_centre")
public class ServiceCentre {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter @Setter
    private String name;

    @Getter @Setter
    @OneToOne
    private Address address;

    @Getter @Setter
    @OneToOne
    private Contact contact;

    @OneToMany(mappedBy = "serviceCentre", cascade = CascadeType.REMOVE)
    @Getter
    @JsonManagedReference
    private List<Service> services;
}
