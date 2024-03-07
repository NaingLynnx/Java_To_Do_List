package org.talent.todolist.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NewCategoryRequest {

    private String name;
    private String imageUrl;

}
