using System;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbreact.UmbHeadless.Models;

namespace Umbreact.UmbHeadless.Business
{
	public static class ContentSerializer
	{
		public static List<Prop> ProcessContentBlock(IPublishedElement publishedContent)
		{
			List<Prop> Props = new List<Prop>();

			foreach (var prop in publishedContent.Properties)
			{
				Props.Add(new Prop(prop.Alias, prop.GetSourceValue()));
			}

			return Props;
		}
	}
}

