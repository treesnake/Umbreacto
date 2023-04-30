using System;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common;
using Umbraco.Cms.Web.Common.UmbracoContext;
using Umbreact.UmbHeadless.Models;
using Umbraco.Cms.Core.Models;

namespace Umbreact.UmbHeadless.Business
{
	public static class ContentSerializer
	{
		public static List<Prop> ProcessContentBlock(IPublishedElement publishedContent, string _myDomain)
		{
			List<Prop> Props = new List<Prop>();
            

            foreach (var prop in publishedContent.Properties)
			{
				if(prop.PropertyType.DataType.EditorAlias.Equals("Umbraco.MediaPicker3"))
				{
					MediaWithCrops s = prop.GetValue("Url") as MediaWithCrops;
                    Props.Add(new Prop(prop.Alias, _myDomain + s.Url()));
                }
                else if (prop.PropertyType.DataType.EditorAlias.Equals("Umbraco.ContentPicker"))
                {
                    IPublishedContent s = prop.GetValue("Url") as IPublishedContent;
                    Props.Add(new Prop(prop.Alias, s.Url()));
                }
                else
				{
                    Props.Add(new Prop(prop.Alias, prop.GetSourceValue()));
                }
			}

			return Props;
		}
	}
}

