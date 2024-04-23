import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: var(--text-gray);
  padding-bottom: 30px;
`;

// Оновлена функція control
export const styles = {
  control: (base: any) => ({
    ...base,
    minWidth: 210,
    maxWidth: 210,
    minHeight: 50,
    borderRadius: "10px",
    background: "var(--primary-orange)",
    color: "var(--primary-white)",
    fontSize: "18px",
    fontWeight: "500",
  }),
  option: (styles: any, state: any) => ({
    ...styles,
    color: state.isSelected ? "var(--primary-black)" : "var(--primary-gray)",
    fontSize: "18px",
    fontWeight: "500",
    ":hover": {
      background: "var(--hover-orange)",
      color: "var(--transparent-black)",
    },
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    background: "var(--primary-white)",
    borderRadius: "10px",
    minWidth: 210,
    maxWidth: 210,
  }),
};