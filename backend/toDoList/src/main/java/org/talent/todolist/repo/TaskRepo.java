package org.talent.todolist.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.talent.todolist.entity.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task,Integer> {
}
