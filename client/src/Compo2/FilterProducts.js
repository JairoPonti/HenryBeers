import React from "react";

const FilterProducts = () => {
  return (
    <div>
      <section class="section sort-category">
        <div class="title-container ">
          <div class="section-titles">
            <div class="section-title active filter-btn" data-id="trend">
              <span class="dot"></span>
              <h1 class="primary-title">Los mas vendidos</h1>
            </div>
          </div>

          <div class="section-titles">
            <div class="section-title filter-btn" data-id="special">
              <span class="dot"></span>
              <h1 class="primary-title">Te Recomendamos</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilterProducts;
