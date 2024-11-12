Getter - tak nazwałem plik określający pobieranie elementów w vitest.

Możemy pobierać elementy za pomocą queryByText, getByText, findByText.

queryByText - zwraca null jeśli nie znajdzie elementu.
getByText - zwraca element jeśli znajdzie element.
findByText - zwraca promise, który jest resolved jeśli znajdzie element.

Do elementów nie widzialnych dla użytkownika możemy użyć queryByText. Dla widzialnych getByText. A dla elementów, które pojawią się w czasie animacji/pobierania danych findByText.

Testowanie polega na sprawdzeniu logiki działania komponentu.
Dla łatwiejszego testowania możemy używać screen.debug().
