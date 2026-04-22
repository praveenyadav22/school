import { whyChooseItems } from '@/lib/navigation';

export default function WhyChooseSection() {
  return (
    <div className="column_alignment section_wrapper why_choose_section_wrapper">
      <div className="column_alignment main_content align_self_center">
        <span className="page_heading dark">
          Why Choose <br />
          <b className="yellow">St. Columbo Public School</b>
        </span>
        <div className="row_alignment wrap four">
          {whyChooseItems.map((item) => (
            <div key={item.title} className="column_alignment">
              <div className="column_alignment why_choose_item_wrapper">
                <div className="column_alignment image_wrapper">
                  <img src={item.image} alt={item.title} />
                </div>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
