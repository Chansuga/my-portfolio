export type DateParts = { year: number; month: number; day?: number };

// 日が未入力の場合は、同じ月の中で先頭に並べる
export function dateSortKey({ year, month, day = 0 }: DateParts) {
  return (year * 12 + month) * 32 + day;
}

export function formatDate({ year, month, day }: DateParts) {
  return `${year}年${month}月${day ? `${day}日` : ""}`;
}
