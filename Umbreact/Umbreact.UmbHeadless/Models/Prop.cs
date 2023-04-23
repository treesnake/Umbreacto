using System;
namespace Umbreact.UmbHeadless.Models
{
	public class Prop
	{
        public string Alias { get; set; }

        public object? Value { get; set; }

        public Guid DisplayId { get; set; }

        //ctor
        public Prop(string alias, object? value)
        {
            Alias = alias;
            Value = value;
            DisplayId = Guid.NewGuid();
        }

	}
}

