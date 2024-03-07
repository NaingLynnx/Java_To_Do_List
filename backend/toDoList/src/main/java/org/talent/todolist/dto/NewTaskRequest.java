package org.talent.todolist.dto;

import lombok.*;
import org.talent.todolist.entity.Category;
import org.talent.todolist.enumeration.RepeatType;

import java.time.LocalTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class NewTaskRequest {
    private String label;
    private LocalTime startTime;
    private LocalTime endTime;
    private RepeatType repeatType;
    private int categoryID;


}
