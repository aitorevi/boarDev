// Componente que le pasas un color y la opacidad con un número del 0 al 1 y te calcula la opacidad en hexadecimal

export const addOpacityToColor = (color, opacity) => {
  const opacityHex = Math.round(opacity * 255).toString(16);
  return `${color}${opacityHex}`;
};
