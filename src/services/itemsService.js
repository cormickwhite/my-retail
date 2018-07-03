import ItemData from '../itemData.json';

export function requestItems() {
  return Promise.resolve(ItemData.CatalogEntryView[0]);
}
