CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE Investigation (
                               Investigation_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                               Investigation_Date DATE NOT NULL,
                               Name TEXT NOT NULL,
                               Status TEXT NOT NULL,
                               Investigation_Case_Value INTEGER
);

CREATE TABLE Incident (
                          Incident_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          Investigation_ID UUID REFERENCES Investigation(Investigation_ID) ON DELETE SET NULL,
                          Incident_Date DATE NOT NULL,
                          Name TEXT NOT NULL,
                          Record_Type TEXT NOT NULL,
                          Status TEXT NOT NULL,
                          Case_Value INTEGER,
                          Incident_Type TEXT NOT NULL
);

CREATE TABLE Investigation_Activity (
                                        Investigation_Activity_ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                                        Investigation_ID UUID REFERENCES Investigation(Investigation_ID) ON DELETE SET NULL,
                                        Activity_Date DATE NOT NULL,
                                        Name TEXT NOT NULL,
                                        Record_Type TEXT NOT NULL,
                                        Status TEXT NOT NULL,
                                        Investigation_Activity_Location TEXT,
                                        Date_Issued DATE,
                                        Issued_By TEXT,
                                        Start_Date DATE
);