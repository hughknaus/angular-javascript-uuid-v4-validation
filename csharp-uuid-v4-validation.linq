<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
</Query>

/// <summary>
/// Simple script to check whether a C# Guid is really a UUID version 4.
/// </summary>
public static void Main()
{
	var uuidMax = 100;
	var errorsFound = 0;
	var total = 0;

	for (var i = 0; i < uuidMax; i++)
	{
		var guid = Guid.NewGuid();
		var uuidVersion = guid.ToString().Substring(14, 1);
		var isVersion4 = uuidVersion == "4";

		if (!isVersion4)
		{
			errorsFound += 1;
		}

		Console.WriteLine(String.Format("i = {0}; errorsFound = {1}", i, errorsFound));
		total++;
	}

	Console.WriteLine(String.Format("items = {0}; ; errorsFound = {1}; {2}", total, errorsFound, (errorsFound == 0 ? " ALL v4 UUIDs" : "")));
	Console.WriteLine();
}
