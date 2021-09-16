Field Data Type	Octet #	Note
time_low  unsigned 32 bit integer	0-3	The low field of the timestamp.
time_mid	unsigned 16 bit integer	4-5	The middle field of the timestamp.
time_hi_and_version	unsigned 16 bit integer	6-7	The high field of the timestamp multiplexed with the version number.
clock_seq_hi_and_reserved	unsigned 8 bit integer	8	The high field of theclock sequence multiplexed with the variant.
clock_seq_low	unsigned 8 bit integer	9	The low field of the clock sequence.
node	unsigned 48 bit integer	10-15	The spatially unique node identifier.

                             +- UUID version
                             |
                            |-| 
 3 7 a 6 a d 6 3 - 7 0 0 c - 4 4 0 4 - b d d 4 - 8 2 8 5 7 5 8 4 5 0 4 5
|---------------| |-------| |---|---| |-------| |-----------------------|
        |             |       |   |       |                 |
        |             |       |   |       |                 +- node
        |             |       |   |       +- clock_seq_low
        |             |       |   +- clock_seq_hi_and_reserved
        |             |       +- time_hi_and_version
        |             +- time_mid
        +- time_low
