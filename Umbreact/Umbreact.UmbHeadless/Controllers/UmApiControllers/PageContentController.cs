using System;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Common.UmbracoContext;
using Umbreact.UmbHeadless.Business;
using Umbreact.UmbHeadless.Models;
using Umbreact.UmbHeadless.Web.Models;

namespace Umbreact.UmbHeadless.Controllers.UmApiControllers
{
	public class PageContentController : UmbracoApiController 
    {
        private UmbracoHelper _umbracoHelper;
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;

        public PageContentController(UmbracoHelper umbracoHelper, IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoHelper = umbracoHelper;
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        public string GetPageContent(int id)
        {
            string returnVal = "";
            List<Prop> pageProps = new List<Prop>();
            NormalPage page = _umbracoHelper.Content(id) as NormalPage;


            foreach (var prop in page.Properties)
            {
                
                pageProps.Add(new Prop(prop.Alias, prop.GetSourceValue()));
            }

            returnVal = JsonConvert.SerializeObject(pageProps);
            return returnVal;
        }

        public string GetPageContentByUrl(string url)
        {
            IUmbracoContext con;
            _umbracoContextAccessor.TryGetUmbracoContext(out con);

            string returnVal = "";
            List<Prop> pageProps = new List<Prop>();
            
            NormalPage page = con.Content.GetByRoute(url) as NormalPage;


            foreach (var prop in page.Properties)
            {

                pageProps.Add(new Prop(prop.Alias, prop.GetSourceValue()));
            }

            returnVal = JsonConvert.SerializeObject(pageProps);
            return returnVal;
        }
    }
}

