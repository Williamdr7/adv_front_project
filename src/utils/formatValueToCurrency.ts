/**
 * Receive a number and format to currency pattern,
 *  if no has value return 0
 * @param  {number | null | undefined} value
 * @param  {} noDecimal=false
 * @returns {string} formated value
 */
export const formatValueToCurrency = (
  value: number | string | null | undefined,
  noDecimal?: boolean,
  noPrefix?: boolean,
): string => {
  if (!value) return "0";
  const newValue = value.toLocaleString("pt-BR", {
    maximumFractionDigits: noDecimal ? 0 : 2,
    minimumFractionDigits: 0,
    style: noPrefix ? undefined : "currency",
    currency: noPrefix ? undefined : "BRL",
  });
  return newValue;
};

export const formatValueToCurrencyWithDecimals = (
  value: number | string | null | undefined | any,
  noPrefix?: boolean,
): string => {
  if (!value) {
    if (noPrefix) {
      return "0,00";
    }
    return "R$ 0,00";
  }

  const newValue = value.toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: noPrefix ? undefined : "currency",
    currency: noPrefix ? undefined : "BRL",
  });
  return newValue;
};

export const formatValueToPercentage = (value: number | string) => {
  if (!value) {
    return "0,00%";
  }

  return String(value).replace(".", ",").concat("%");
};
