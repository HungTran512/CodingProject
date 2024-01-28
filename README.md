## Infinite Scrolling and Searchable Product List

A simple React application for searching and displaying products with infinite scroll, built with TypeScript and Vite.

## Features

<li>
Search products by name
</li>
<li>
Infinite scroll for loading more products
</li>

## Installation

<ol>
<li>Clone the repository
</li>

<li>Navigate to the project
directory:

```
cd react-product-search-app
```

</li>

<li>
Install dependencies:

```
npm install
```

</li>
</ol>

## Usage

<ol>
<li>
Start the development server:

```
npm start
```

</li>
<li>Open your browser and go to <a href="http://localhost:3000">http://localhost:3000</a></li>

</ol>

## Application Structure

```
src/
|-- components/
| |-- SearchBar.tsx
| |-- ProductList.tsx
|-- api/
| |-- ProductsApi.ts
| |-- searchApi.ts
|-- interfaces/
| |-- Product.interface.ts
|-- App.tsx
|-- main.tsx
|-- ...
```

## How to Use

<strong>Search for Products:</strong>

<ul>
<li>Use the search bar at the top to enter the name of the product you're looking for.</li>
<li>The product list will be updated as you type, fetching relevant results.</li>
</ul>

<strong>Infinite Scroll:</strong>

<ul>

<li>Scroll down to the bottom of the product list to automatically load more products.
</li>
<li>The application will continue to fetch and display products as you scroll.
</li>
</ul>

## Load Initial Products:

<ul>
<li>On the initial load, 20 products are fetched and displayed.
</li>
<li>Additional products are loaded automatically as you scroll or when using the search feature.</li>
</ul>

## License

This project is licensed under the MIT License.
