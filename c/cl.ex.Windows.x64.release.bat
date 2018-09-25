mkdir output
cl /w /c /MTd /D "_DEBUG" /I "include/" ./include/crypto/blake2b.c
cl /w /c /MTd /D "_DEBUG" /I "include/" ./include/utility.cpp
cl /w /c /MTd /D "_DEBUG" /I "include/" ./include/uint256.cpp
cl /w /c /MTd /D "_DEBUG" /I "include/" ./include/utilstrencodings.cpp
cl /w /c /MTd /EHsc /D "WIN32" /D "_DEBUG" /I "include/" ./include/arith_uint256.cpp
cl /w /c /MTd /EHsc /D "WIN32" /D "_DEBUG" /I "include/" ./miner.cpp


link /OUT:"output/miner.x64.release.exe" /NXCOMPAT /DYNAMICBASE /DEBUG /MACHINE:X64 /INCREMENTAL /SUBSYSTEM:CONSOLE /MANIFESTUAC:"level='asInvoker' uiAccess='false'" /ERRORREPORT:PROMPT /NOLOGO /TLBID:1 miner.obj blake2b.obj utility.obj uint256.obj utilstrencodings.obj arith_uint256.obj ../asm/equihash/Windows/equihash_avx2.obj