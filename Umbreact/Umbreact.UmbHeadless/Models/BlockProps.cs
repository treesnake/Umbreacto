using System;
namespace Umbreact.UmbHeadless.Models
{
	public class BlockProps
	{
		public List<Prop> Props { get; set; }
		public Guid BlockDisplayId { get; set; }
		public string Alias { get; set; }

		public BlockProps(string alias, List<Prop> props)
		{
			Alias = alias;
			Props = props;
			BlockDisplayId = Guid.NewGuid();
		}
	}
}

