export const sortProducts = (filter, products) => {
  switch (filter) {
    case "lowest":
      return products.sort((a, b) => a.cost - b.cost);

    case "highest":
      return products.sort((a, b) => b.cost - a.cost);

    default:
      return products.sort((a, b) =>
        a._id > b._id ? 1 : b._id > a._id ? -1 : 0
      );
  }
}