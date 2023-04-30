using Newtonsoft.Json;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.Controllers;
using Umbreact.UmbHeadless.Business;
using Umbreact.UmbHeadless.Models;
using Umbreact.UmbHeadless.Web.Models;

namespace Umbreact.UmbHeadless.Controllers.UmApiControllers
{
    public class ContentBlockController : UmbracoApiController
    {
        private UmbracoHelper _umbracoHelper;
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;

        public ContentBlockController(UmbracoHelper umbracoHelper, IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoHelper = umbracoHelper;
            _umbracoContextAccessor = umbracoContextAccessor;

        }

        public string GetContentBlocks(int id)
        {
            string returnVal = "";
            string _myDomain = HttpContext.Request.Scheme + "://" + HttpContext.Request.Host;
            List<BlockProps> contentBlockProps = new List<BlockProps>();
            NormalPage page = _umbracoHelper.Content(id) as NormalPage;


            foreach (var block in page.ContentBlocks)
            {
                BlockProps bprop = new BlockProps(block.Content.ContentType.Alias, ContentSerializer.ProcessContentBlock(block.Content, _myDomain));
                contentBlockProps.Add(bprop);
            }

            returnVal = JsonConvert.SerializeObject(contentBlockProps);
            return returnVal;
        }

        public string GetContentBlocksByUrl(string url)
        {
            string returnVal = "";
            string _myDomain = HttpContext.Request.Scheme + "://" + HttpContext.Request.Host;
            IUmbracoContext con;
            _umbracoContextAccessor.TryGetUmbracoContext(out con);

            List<BlockProps> contentBlockProps = new List<BlockProps>();
            NormalPage page = con.Content.GetByRoute(url) as NormalPage;


            foreach (var block in page.ContentBlocks)
            {
                BlockProps bprop = new BlockProps(block.Content.ContentType.Alias, ContentSerializer.ProcessContentBlock(block.Content, _myDomain));
                contentBlockProps.Add(bprop);
            }

            returnVal = JsonConvert.SerializeObject(contentBlockProps);
            return returnVal;
        }
    }
}

