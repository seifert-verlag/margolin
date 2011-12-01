import sys

counter = int(sys.argv[2])

with open(sys.argv[1]) as f:
	for line in f.readlines():
		line = line.strip()
		if (line):
			print "<p class=\"hyphenate content\" id=\"p%d\">%s</p>" % (counter, line.strip())
			counter += 1
		else:
			print ""

