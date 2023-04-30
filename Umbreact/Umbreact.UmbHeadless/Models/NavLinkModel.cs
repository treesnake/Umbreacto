namespace Umbreact.UmbHeadless.Models
{
    public class NavLinkModel
	{
        public string Url { get; set; }
        public string Label { get; set; }
        public Guid DisplayId { get; set; }

        public NavLinkModel(string label, string url)
        {
            Url = url;
            Label = label;
            DisplayId = Guid.NewGuid();
        }
   	}
}

