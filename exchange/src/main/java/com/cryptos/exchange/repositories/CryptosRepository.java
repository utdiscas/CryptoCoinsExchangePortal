package com.cryptos.exchange.repositories;

import com.cryptos.exchange.model.CryptoCoin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by caeruleum on 05.06.2018.
 */
public interface CryptosRepository extends JpaRepository<CryptoCoin, Long>{
}
