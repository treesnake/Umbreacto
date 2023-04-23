using System;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Core.Services;
using Umbreact.UmbHeadless.Web.Models;
using Umbraco.Cms.Web.Common;
using Newtonsoft.Json;
using Umbreact.UmbHeadless.Business;
using Umbreact.UmbHeadless.Models;

namespace Umbreact.UmbHeadless.Controllers.UmApiControllers
{
	public class ContentBlockController : UmbracoApiController
    {
        private UmbracoHelper _umbracoHelper;

        public ContentBlockController(UmbracoHelper umbracoHelper)
        {
            _umbracoHelper = umbracoHelper;
        }

        public string GetContentBlocks(int id)
        {
            string returnVal = "";
            List<BlockProps> contentBlockProps = new List<BlockProps>();
            NormalPage page = _umbracoHelper.Content(id) as NormalPage;


            foreach (var block in page.ContentBlocks)
            {
                BlockProps bprop = new BlockProps(block.Content.ContentType.Alias, ContentSerializer.ProcessContentBlock(block.Content));
                contentBlockProps.Add(bprop);
            }

            returnVal = JsonConvert.SerializeObject(contentBlockProps);
            return returnVal;
        }
    }
}

