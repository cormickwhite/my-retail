import ItemData from '../itemData.json';

export function requestItems() {
  return ItemData.CatalogEntryView[0];
}
