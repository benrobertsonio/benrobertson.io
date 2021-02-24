import React from "react";
const createDataLayer = () => ({
  __html: "window.dataLayer = window.dataLayer || []",
});
const optimizeAntiFlickerStyle = () => ({
  __html: ".async-hide { opacity: 0 !important}",
});
const optimizeAntiFlickerScript = (containerId) => ({
  __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'${containerId}':true});`,
});
const customHeadComponents = [
  <script dangerouslySetInnerHTML={createDataLayer()} />,
  <style dangerouslySetInnerHTML={optimizeAntiFlickerStyle()} />,
  <script dangerouslySetInnerHTML={optimizeAntiFlickerScript(`OPT-NHZ7T4Q`)} />,
  <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NHZ7T4Q"></script>,
];
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const mergedHeadComponents = [
    ...customHeadComponents,
    ...getHeadComponents(),
  ];
  replaceHeadComponents(mergedHeadComponents);
};