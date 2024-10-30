import React from 'react';

const RoutesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* <SiteHeader /> */}
      <main className='flex-1'>{children}</main>
      {/* <SiteFooter /> */}
    </>
  );
};

export default RoutesLayout;
