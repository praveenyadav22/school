import BreadCrumb from "./BreadCrumb";

interface InnerPageProps {
  title: string;
  bgImage?: string;
  children: React.ReactNode;
  /** Optional sidebar content (rendered right of main content) */
  sidebar?: React.ReactNode;
}

/**
 * InnerPage — wraps every inner page with:
 *  1. InnerBanner with dynamic breadcrumb
 *  2. innerBody content area (optional sidebar layout)
 */
export default function InnerPage({ title, bgImage, children, sidebar }: InnerPageProps) {
  return (
    <>
      <BreadCrumb title={title} bgImage={bgImage} />

      <div className="bodySection innerBody">
        <div className="container">
          <div className="row">
            {sidebar ? (
              <>
                <div className="col-lg-9 col-md-8">
                  <div className="inner-content">{children}</div>
                </div>
                <div className="col-lg-3 col-md-4">
                  {sidebar}
                </div>
              </>
            ) : (
              <div className="col-lg-12">
                <div className="inner-content">{children}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
