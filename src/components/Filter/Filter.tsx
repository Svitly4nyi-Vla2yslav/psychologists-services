// import {  useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import Select, { SingleValue } from "react-select";
// import { StyledWrapper, styles } from './Filter.styled';
// import { setFilter, setFilterFav, setShowLoadMore } from '../../redux/psychologists/psychologistsSlice';


// const options = [
//   { value: "AZ", label: "A to Z" },
//   { value: "ZA", label: "Z to A" },
//   { value: "Less10", label: "Less than 10$" },
//   { value: "More10", label: "Greater than 10$" },
//   { value: "POPULAR", label: "Popular" },
//   { value: "NOTPOPULAR", label: "Not popular" },
//   { value: "ALL", label: "Show all" },
// ];

// export const Filter: React.FC = () => {
//   const dispatch = useDispatch();
//   const [selectedValue, setSelectedValue] = useState<
//     SingleValue<{ value: string; label: string }>
//   >({ value: "ALL", label: "Show all" });
//   const [menuIsOpen, setMenuIsOpen] = useState(false);
//   const location = useLocation();

//   const stylesSelect = {
//     ...styles,
//     dropdownIndicator: (provided: any) => ({
//       ...provided,
//       transition: "transform 0.2s ease",
//       transform: menuIsOpen ? "rotate(180deg)" : null,
//     }),
//   };

//   useEffect(() => {}, [selectedValue]);

//   const handleChange = (
//     selectedOption: SingleValue<{ value: string; label: string }>
//   ) => {
//     setSelectedValue(selectedOption);
//     dispatch(setShowLoadMore(false));
//     if (selectedOption) {
//       location.pathname === "/Psychologists/psychologists"
//         ? dispatch(setFilter(selectedOption.value))
//         : dispatch(setFilterFav(selectedOption.value));
//     }
//   };

//   return (
//     <StyledWrapper>
//       Filters
//       <Select
//         value={selectedValue}
//         onChange={(value) => handleChange(value)}
//         options={options}
//         styles={stylesSelect}
//         menuIsOpen={menuIsOpen}
//         onMenuOpen={() => setMenuIsOpen(true)}
//         onMenuClose={() => setMenuIsOpen(false)}
//         theme={(theme: any) => ({
//           ...theme,
//           colors: {
//             neutral50: "var(--primary-white)",
//           },
//         })}
//       />
//     </StyledWrapper>
//   );
// };