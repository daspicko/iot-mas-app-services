package hr.foi.daspicko.iotmasservices.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@Entity
@Table(name = "address")
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @Setter
    @Size(min = 3)
    private String street;

    @Getter
    @Setter
    @Min(10000)
    @Max(60000)
    private int postNumber;

    @Getter
    @Setter
    @Size(min = 3)
    private String city;
}
