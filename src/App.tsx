import { Button, BUTTON_VARIANTS } from "./lib";

function App() {
  // обработчик нажатия кнопки
  // принимает вариант кнопки
  const onClick = (variant: string) => {
    // выводим сообщение в консоль инструментов разработчика в браузере
    console.log(`${variant} button clicked`);
  };

  return (
    <>
      {/* Default */}
      <Button onClick={() => onClick("primary")}>primary</Button>
      {/* Disabled */}
      <Button onClick={() => onClick("disabled")} disabled>
        disabled
      </Button>
      {/* Success */}
      <Button
        variant={BUTTON_VARIANTS.SUCCESS}
        onClick={() => onClick(BUTTON_VARIANTS.SUCCESS)}
      >
        {BUTTON_VARIANTS.SUCCESS}
      </Button>
      {/* Warning */}
      <Button
        variant={BUTTON_VARIANTS.WARNING}
        onClick={() => onClick(BUTTON_VARIANTS.WARNING)}
      >
        {BUTTON_VARIANTS.WARNING}
      </Button>
      {/* Danger */}
      <Button
        variant={BUTTON_VARIANTS.DANGER}
        onClick={() => onClick(BUTTON_VARIANTS.DANGER)}
      >
        {BUTTON_VARIANTS.DANGER}
      </Button>
    </>
  );
}

export default App;