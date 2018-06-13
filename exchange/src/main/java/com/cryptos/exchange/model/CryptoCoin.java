package com.cryptos.exchange.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;

/**
 * Created by caeruleum on 04.06.2018.
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class CryptoCoin {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private boolean contact;
    private  String email;
    private String coinType;
    private String name;
    private String phone;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern ="MM-dd-yyyy")
    private Date purchaseDate;
    private Integer amountOfCoins;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCoinType() {
        return coinType;
    }

    public void setCoinType(String coinType) {
        this.coinType = coinType;
    }

    public Integer getAmountOfCoins() {
        return amountOfCoins;
    }

    public void setAmountOfCoins(Integer amountOfCoins) {
        this.amountOfCoins = amountOfCoins;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public boolean isContact() {
        return contact;
    }

    public void setContact(boolean contact) {
        this.contact = contact;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


}
