Events - tak nazwałem plik określający zdarzenia w vitest.

Możemy używać fireEvent, userEvent.

fireEvent - pozwala na wywołanie zdarzenia na elementach DOM.
userEvent - pozwala na symulowanie zdarzeń użytkownika.

Vitest poleca użycie userEvent.

Najpierw trzeba go zainicjować za pomocą userEvent.setup().
