# Projekt File Reader

Ten projekt to prosta aplikacja webowa, która odczytuje plik tekstowy zawierający liczby, pobiera dane z serwera na podstawie tych liczb, a następnie generuje plik HTML z pobranymi danymi.

## Wymagania

1. **Przygotowanie Pliku Tekstowego**: 
   - Potrzebujesz pliku tekstowego (`.txt`), w którym każda linia zawiera jedną liczbę.
   - Przykład zawartości pliku tekstowego:
     ```
     1
     2
     3
     4
     ```

2. **Informacje o Hostingu**:
   - Serwer, z którego pobierane są dane, jest hostowany na render.com.
   - Ze względu na charakter hostingu na render.com, może wystąpić opóźnienie wynoszące około minuty w otrzymywaniu odpowiedzi z serwera. Proszę o cierpliwość podczas pobierania danych.
   - **Dlaczego Potrzebny Jest Własny Serwer Proxy**:
     - Aby pobierać dane z zewnętrznego serwera (np. xkcd.com), konieczne było użycie własnego serwera proxy z powodu ograniczeń CORS (Cross-Origin Resource Sharing).
     - CORS to mechanizm bezpieczeństwa przeglądarki, który ogranicza żądania HTTP wykonywane z jednej domeny do innej. Aby obejść te ograniczenia i móc pobierać dane bezpośrednio, stworzyliśmy serwer proxy, który działa jako pośrednik pomiędzy naszą aplikacją a zewnętrznym serwerem, umożliwiając tym samym bezpieczne pobieranie danych.


## Jak Używać

Aplikację można przetestować, wchodząc na stronę: [https://kamilficerman.github.io/js-zadanie](https://kamilficerman.github.io/js-zadanie)

1. **Prześlij Swój Plik Tekstowy**:
- Kliknij na pole wyboru pliku i wybierz przygotowany plik tekstowy.

2. **Generuj HTML**:
- Aplikacja odczyta liczby z Twojego pliku tekstowego, pobierze odpowiednie dane z serwera i wygeneruje plik HTML do pobrania.
- W przypadku opóźnienia proszę poczekać około minuty na odpowiedź serwera.