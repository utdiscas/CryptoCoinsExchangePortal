package com.cryptos.exchange.controllers;

import com.cryptos.exchange.model.CryptoCoin;
import com.cryptos.exchange.repositories.CryptosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by caeruleum on 04.06.2018.
 */

@RestController
@RequestMapping("api/cryptos")
public class CryptoCoinController {

    @Autowired
    private CryptosRepository cryptosRepository;

    @GetMapping //when get method with this url will be requested I wiill return cryptos
    public List<CryptoCoin> list(){
      //  List<CryptoCoin> cryptos = new ArrayList<>();
        return  cryptosRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody CryptoCoin cryptoCoin){
        cryptosRepository.save(cryptoCoin);
    }

    @GetMapping("/{id}")
    public CryptoCoin get(@PathVariable("id") long id){
        return cryptosRepository.getOne(id);
    }



}
