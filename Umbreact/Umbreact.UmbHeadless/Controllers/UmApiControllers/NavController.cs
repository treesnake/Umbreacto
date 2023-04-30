using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;
using Umbreact.UmbHeadless.Models;

namespace Umbreact.UmbHeadless.Controllers.UmApiControllers
{
    public class NavController : UmbracoApiController
    {
        private UmbracoHelper _umbracoHelper;

        public NavController(UmbracoHelper umbracoHelper)
        {
            _umbracoHelper = umbracoHelper;
        }

        public string GetNavItems()
        {
            string returnVal = "";
            List<NavLinkModel> navLinks = new List<NavLinkModel>();
            List<IPublishedContent> pages = _umbracoHelper.ContentAtRoot().Where(x => x.ContentType.Alias.Equals("normalPage")).ToList();

            foreach(var publy in pages)
            {
                navLinks.Add(new NavLinkModel(publy.Name, publy.Url()));
            }

            returnVal = JsonConvert.SerializeObject(navLinks);
            return returnVal;
        }
    }
}

