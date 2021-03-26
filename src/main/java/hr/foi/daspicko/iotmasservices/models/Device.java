package hr.foi.daspicko.iotmasservices.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "device")
public class Device {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter @Setter
    @Size(min = 3)
    private String name;

    @Getter @Setter
    @Size(min = 3)
    private String description;

}
