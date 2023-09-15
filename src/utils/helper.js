export function filterData(SearchInput, restaurants) {
    const rData = restaurants.filter((restaurant) => restaurant?.info?.name.toLowerCase().includes(SearchInput.toLowerCase())
    );
    return rData;
}