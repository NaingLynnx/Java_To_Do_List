package org.talent.todolist.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.talent.todolist.enumeration.RepeatType;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Getter
@Setter
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "NVARCHAR(30)")
    private String label;

    private LocalTime startTime;
    private LocalTime endTime;

    @Enumerated(EnumType.STRING)//Without it,Store as number index
    private RepeatType repeatType;

    @ManyToOne(cascade = CascadeType.MERGE)
    private Category category;

}
