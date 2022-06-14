import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";
import * as media from "../../mediaBounds";
import ExpandableFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";
import FiltersIcon from "../../images/filter-icon.png";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  onSearch,
}) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
        />
        <MobileFiltersButton>
          <img src={FiltersIcon} alt="Filters icon" />
        </MobileFiltersButton>
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: "Calendar icon" }}
          placeholder="Year of release"
        />
      </SearchFiltersCont>
      <SearchFiltersCont>
        <CategoryTitle>Movies</CategoryTitle>
        {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
        <ExpandableFilter options={genres} title="Select genre(s)" />
        <ExpandableFilter options={ratings} title="Select min. vote" />
        <ExpandableFilter options={languages} title="Select language" />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const MobileFiltersButton = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};
  margin-bottom: 15px;

  @media (min-width: ${media.mobileBound}) {
    display: none;
  }

  img {
    height: 26px;
    position: relative;
    top: 5px;
  }
`;

const FiltersWrapper = styled.div`
  position: relative;
  margin-top: 19px;
`;

const SearchFiltersCont = styled.div`
  display: flex;
  gap: 15px;

  :nth-child(2) {
    @media (max-width: ${media.mobileBound}) {
      display: none;
    }
  }

  .search_bar_wrapper:nth-child(3) {
    @media (max-width: ${media.mobileBound}) {
      display: none;
    }
  }

  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  &:nth-child(2) year_search_input {
    @media (max-width: ${media.mobileBound}) {
      display: none;
    }
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}

  @media (min-width: ${media.mobileBound}) {
    flex-direction: column;
    background-color: ${colors.white};
    padding: 20px;
  }
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
