package com.sp.cricket.apis.services;

import com.sp.cricket.apis.entities.Match;

import java.util.List;
/***********************
 *                     *
 * @author shwetank    *
 * @version 1.0        *
 *                     *
 ***********************/
public interface CricketService {

    List<Match> getLiveMatchScores();
    List<List<String>> getCWC2023PointTable();

    List<Match> getAllMatches();



}
