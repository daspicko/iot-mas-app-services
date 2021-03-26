package hr.foi.daspicko.iotmasservices.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "services")
public class Service {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private Long id;

    @Getter @Setter
    @OneToOne
    private Device device;

    @Getter @Setter
    private float price;

    @Getter @Setter
    private int time; // time in seconds

    @ManyToOne
    @JoinColumn(name = "serviceCentre_id")
    @Getter @Setter
    @JsonBackReference
    private ServiceCentre serviceCentre;
}
