package com.sp.cricket.apis.repositories;

import com.sp.cricket.apis.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
/***********************
 *                     *
 * @author shwetank    *
 * @version 1.0        *
 *                     *
 ***********************/
public interface MatchRepo extends JpaRepository<Match,Integer> {

    Optional<Match> findByTeamHeading(String teamHeading);

}
