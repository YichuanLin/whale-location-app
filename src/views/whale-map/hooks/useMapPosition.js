export const useMapPosition = (list, selectedItem) => {
  if (selectedItem) {
    const foundItem = list.find(item => item.id === selectedItem);
    if (foundItem) {
      return [foundItem.latitude, foundItem.longitude];
    }
  }
  if (list.length) {
    const [firstItem] = list;
    return [firstItem.latitude, firstItem.longitude];
  }
  return null;
};
