export default class ColumnChart {
  constructor(props) {
    this.props = {
      data: [],
      ...props,
    };
    this.chartHeight = 50;
    this.render();
  }

  getColumnParameters(data) {
    const maxValue = Math.max(...data);

    return data.map(value => {
      const ratio = value / maxValue;

      return {
        height: Math.floor(ratio * this.chartHeight),
        percent: Math.round(ratio * 100),
      };
    });
  }

  getTemplate() {
    const { data, label, link, value, formatHeading } = this.props;
    const chartHeight = this.chartHeight;

    const loadingModifier = data?.length ? '' : 'column-chart_loading';
    const displayValue = formatHeading?.(value) ?? value;
    const columns = this.getColumnParameters(data);

    return `
      <div class="column-chart ${loadingModifier}" style="--chart-height: ${chartHeight}">
        <div class="column-chart__title">
          Total ${label}
          ${link ? `<a href="${link}" class="column-chart__link">View all</a>` : '' }
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${displayValue}
          </div>
          <div data-element="body" class="column-chart__chart">
            ${columns
              .map(({ height, percent }) => `<div style="--value: ${height}" data-tooltip="${percent}%"></div>`)
              .join('')}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.getTemplate();
    this.element = element.firstElementChild;
  }

  update(data) {
    this.props.data = data;
    this.element.outerHTML = this.getTemplate();
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
